<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
      </div>
    </div>
  </div>
  <div class="grid">
    <div class="col-12">
      <!-- <div class="card"> -->

      <Timeline :value="customEvents" align="left" class="customized-timeline">
        <template #marker="slotProps">
          <span
            class="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-2"
            :style="{ backgroundColor: slotProps.item.color }">
            <i :class="slotProps.item.icon" @click="slotProps.item.isExpand = !slotProps.item.isExpand"></i>
          </span>
        </template>
        <template #content="slotProps">
          <div class="mb-4 surface-card p-4 shadow-2 border-round">
            <div class="font-medium text-3xl text-900 mb-3">Title</div>
            <div class="text-500 mb-5">Action Item Updated on {{ slotProps.item.date }} by {{ slotProps.item.name }}
            </div>
            <div class="grid grid-nogutter border-top-1 surface-border pt-2">
              <div class="col-12 md:col-6 p-3">
                <div class="text-500 font-medium mb-2">Name</div>
                <div class="text-900">{{ slotProps.item.name }}</div>
              </div>
              <div class="col-12 md:col-6 p-3">
                <div class="text-500 font-medium mb-2">Created</div>
                <div class="text-900">{{ slotProps.item.date }}</div>
              </div>
              <div class="col-12 md:col-6 p-3">
                <div class="text-500 font-medium mb-2">Status</div>
                <div class="text-900">{{ slotProps.item.status }}</div>
              </div>
              <div class="col-12 md:col-6 p-3">
                <div class="text-500 font-medium mb-2">Updated</div>
                <div class="text-900">{{ slotProps.item.date }}</div>
              </div>
              <div class="col-12 p-3">
                <div class="text-500 font-medium mb-2">Purpose</div>
                <div class="text-900 line-height-3">Purpose of Action Item.
                </div>
              </div>
              <div class="col-12 p-3">
                <div class="text-500 font-medium mb-2">Result</div>
                <div class="text-900 line-height-3">Result of Action Item.
                </div>
              </div>
              <div class="col-12" v-if="slotProps.item.isExpand">
                <div class="col-12 p-3">
                  <div class="text-500 font-medium mb-2">Description</div>
                  <div class="text-900 line-height-3">Description of Action Item.
                  </div>
                </div>
                <div class="col-12 p-3">
                  <div class="text-500 font-medium mb-3">Files</div>
                  <div
                    class="flex md:align-items-center md:justify-content-between border-top-1 surface-border p-3 flex-column md:flex-row">
                    <div class="flex align-items-center">
                      <span class="block pi pi-file mr-2"></span>
                      <span class="text-900">resume_en.pdf</span>
                    </div>
                    <Button label="Download" icon="pi pi-download"
                      class="p-button p-component p-button-outlined mt-2 md:mt-0"></Button>
                  </div>
                  <div
                    class="flex md:align-items-center md:justify-content-between border-top-1 border-bottom-1 surface-border p-3 flex-column md:flex-row">
                    <div class="flex align-items-center">
                      <span class="block pi pi-file mr-2"></span>
                      <span class="text-900">cover_letter_en.pdf</span>
                    </div>
                    <Button label="Download" icon="pi pi-download"
                      class="p-button p-component p-button-outlined mt-2 md:mt-0"></Button>
                  </div>
                </div>
                <div class="col-12 p-3 surface-50 border-round">
                  <div class="text-500 font-medium mb-3">Comments</div>
                  <divider />
                  <div class="ml-1 p-3 flex-auto">
                    <div class="mb-3"><span class="text-900 font-medium inline-block mr-3">Jacob Jones</span><span
                        class="text-500 text-sm">1 minute ago</span></div>
                    <div class="line-height-3 text-700 mb-3"> Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                      Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi. </div>
                    <div class="text-500 flex align-items-center"><i class="pi pi-heart mr-1"></i><span
                        class="mr-3">0</span><i class="pi pi-comment mr-1"></i><span class="mr-3">1</span><i
                        class="pi pi-eye mr-1"></i><span>24</span></div>
                  </div>
                  <divider />
                  <div class="ml-1 p-3 flex-auto">
                    <div class="mb-3"><span class="text-900 font-medium inline-block mr-3">Jacob Jones</span><span
                        class="text-500 text-sm">1 minute ago</span></div>
                    <div class="line-height-3 text-700 mb-3"> Eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                      Sollicitudin nibh sit amet commodo nulla. Mauris in aliquam sem fringilla ut morbi. </div>
                    <div class="text-500 flex align-items-center"><i class="pi pi-heart mr-1"></i><span
                        class="mr-3">0</span><i class="pi pi-comment mr-1"></i><span class="mr-3">1</span><i
                        class="pi pi-eye mr-1"></i><span>24</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>




        </template>

      </Timeline>


      <!-- </div> -->
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      customEvents: [
        {
          name: 'olivia',
          status: 'inprogress',
          date: '15/10/2020 10:30',
          icon: 'pi pi-shopping-cart',
          color: '#9C27B0',
          image: 'game-controller.jpg',
          isExpand: false,
        },
        {
          name: 'holand',
          status: 'completed',
          date: '16/10/2020 10:00',
          icon: 'pi pi-check',
          color: '#607D8B',
          isExpand: false,
        }
      ],
    }
  },
  methods: {
    click(slotProps) {
      console.log(slotProps)
      slotProps.item.isExpand = false;
    }
  }
}
</script>

<style lang="scss" scoped>
@media screen {
  ::v-deep(.customized-timeline) {
    .p-timeline-event:nth-child(even) {
      flex-direction: row !important;

      .p-timeline-event-content {
        text-align: left !important;
      }
    }

    .p-timeline-event-opposite {
      flex: 0;
    }

    .p-card {
      margin-top: 1rem;
    }
  }
}
</style>