# Tooltips

<div class="card card-bordered mb-5" id="default">
  <div class="card-header">
    Tooltip
  </div>
  <div class="card-body">
    <div class="space-x-2">
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top"
        title="Tooltip on top">
        Tooltip on top
      </button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="right"
        title="Tooltip on right">
        Tooltip on right
      </button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom"
        title="Tooltip on bottom">
        Tooltip on bottom
      </button>
      <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left"
        title="Tooltip on left">
        Tooltip on left
      </button>
    </div>
  </div>
</div>

<script setup>
console.log('hello')
</script>

<route>
{
  meta: {
    layout: 'default'
  }
}
</route>
