import { toRefs, ref, onMounted, onUnmounted, watch } from 'vue';
import { useRoute } from 'vue-router';

export const activeClass = (
  path: string,
  classes = 'active',
  inactiveClass = 'inactive'
) => {
  const currentPath = useRoute().path;
  return currentPath === path ? classes : inactiveClass;
};

export const useMenu = (props: Record<string, any>, emit: any) => {
  const { modelValue } = toRefs(props);
  const isOpen = ref(modelValue.value);

  const toggle = () => {
    isOpen.value = !isOpen.value;
  };

  watch(isOpen, (val) => {
    emit('update:modelValue', val);
  });

  watch(modelValue, (val) => {
    isOpen.value = val;
  });

  const handleResize = () => {
    isOpen.value = window.innerWidth > 600;
  };

  onMounted(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
  });

  return { modelValue, isOpen, toggle };
};
