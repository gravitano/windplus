# Timeline

<div class="not-prose">
<div class="card card-bordered mb-5" id="default">
  <div class="card-header">
    Timeline
  </div>
  <div class="card-body">
    <div class="space-y-4">
      <!-- timeline item -->
      <div class="timeline-item" v-for="i in 5" :key="i">
        <div class="flex gap-2">
          <div class="timeline-number">
            {{ i }}
          </div>
          <div v-if="i !== 5" class="timeline-line"></div>
        </div>
        <div class="space-y-1">
          <h3 class="timeline-title">
            Item {{ i }}
          </h3>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus magni ut nam. Dolores, iste nisi,
            illum deleniti dignissimos magni maiores debitis, dicta ducimus atque quae minus corrupti cumque quia
            labore.
          </p>
        </div>
      </div>
      <!-- ./timeline item -->
    </div>
  </div>
</div>
</div>
