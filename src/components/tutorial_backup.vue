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
            style="cursor: pointer" :style="{ backgroundColor: slotProps.item.color }">
            <i :class="slotProps.item.icon" @click="slotProps.item.isExpand = !slotProps.item.isExpand"></i>
          </span>
        </template>
        <template #content="slotProps">
          <div class="mb-4 ml-2 surface-card p-4 shadow-2 border-round">
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
                  <div class="text-500 font-medium my-3" v-if="slotProps.item.isAddFiles">
                    <FileUpload name="demo[]" :customUpload="true" @uploader="myUploader($event, slotProps)"
                      :multiple="true" accept="image/*" :maxFileSize="1000000">
                      <template #empty>
                        <p>Drag and drop files to here to upload.</p>
                      </template>
                    </FileUpload>
                  </div>
                  <div v-else class="text-500 font-medium my-3 ml-1" @click="slotProps.item.isAddFiles = true">Add a
                    file</div>

                </div>
                <div class="col-12 p-3 surface-50 border-round">
                  <div class="text-500 font-medium mb-3">Comments</div>
                  <divider />
                  <div class="ml-1 p-3 flex-auto">
                    <div class="mb-3">
                      <span class="text-900 font-medium inline-block mr-3">Jacob Jones</span>
                      <span class="text-500 text-sm">1 minute ago</span>
                    </div>
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
                  <divider />
                  <div class="text-500 font-medium mb-3 ml-1">Add a comment</div>
                </div>
              </div>
            </div>
          </div>




        </template>

      </Timeline>
      <div class="pl-2 ml-6 mb-2">
        <Button label="New" icon="pi pi-plus" class="p-button-success" @click="openNew" />
      </div>

      
      <!-- </div> -->
    </div>
    
  </div>
  <Dialog maximizable="true" v-model:visible="productDialog" :style="{ width: '800px' }" header="Product Details" :modal="true" class="p-fluid">
        <!-- <div class=" text-center px-4 py-4 md:px-4 lg:px-8"> -->
          <divider class="mt-0 mb-4"/>
          <div class="text-900 text-left font-medium text-2xl mb-3">Choose Type</div>
          <div class="text-700 text-left line-height-3 mb-4">Bla Bla</div>
          <div class="grid text-center">
            <div class="col-12 lg:col-4" @click="radioValue = 'aaa'">
              <div class="shadow-2 border-round border-2 cursor-pointer surface-card h-full"
                :class="'border-' + (radioValue == 'aaa' ? 'primary' : 'transparent')">
                <div class="p-3">
                  <div class="text-900 text-xl mb-3 font-medium">Action Item</div>
                  <p class="m-0 mb-3">Sub Title</p>
                  <div>
                    <RadioButton id="option1" name="option" value="aaa" v-model="radioValue" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 lg:col-4" @click="radioValue = 'bbb'">
              <div class="shadow-2 border-round border-2 cursor-pointer surface-card h-full"
                :class="'border-' + (radioValue == 'bbb' ? 'primary' : 'transparent')">
                <div class="p-3">
                  <div class="text-900 text-xl mb-3 font-medium">Action Item</div>
                  <p class="m-0 mb-3">DoE</p>
                  <div>
                    <RadioButton id="option1" name="option" value="bbb" v-model="radioValue" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 lg:col-4" @click="radioValue = 'ccc'">
              <div class="shadow-2 border-round border-2 cursor-pointer surface-card h-full"
                :class="'border-' + (radioValue == 'ccc' ? 'primary' : 'transparent')">
                <div class="p-3">
                  <div class="text-900 text-xl mb-3 font-medium">Re-Test</div>
                  <p class="m-0 mb-3">Sub Title</p>
                  <div>
                    <RadioButton id="option1" name="option" value="ccc" v-model="radioValue" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <divider class="py-3 my-3"/>
        <!-- </div> -->
        <div class="field">
          <label for="name">Name</label>
          <InputText id="name" v-model.trim="product.name" required="true" autofocus
            :class="{ 'p-invalid': submitted && !product.name }" />
          <small class="p-invalid" v-if="submitted && !product.name">Name is required.</small>
        </div>
        <div class="field">
          <label for="description">Description</label>
          <Textarea id="description" v-model="product.description" required="true" rows="3" cols="20" />
        </div>

        <div class="field">
          <label for="inventoryStatus" class="mb-3">Inventory Status</label>
          <Dropdown id="inventoryStatus" v-model="product.inventoryStatus" :options="statuses" optionLabel="label"
            placeholder="Select a Status">
            <template #value="slotProps">
              <div v-if="slotProps.value && slotProps.value.value">
                <span :class="'product-badge status-' + slotProps.value.value">{{ slotProps.value.label }}</span>
              </div>
              <div v-else-if="slotProps.value && !slotProps.value.value">
                <span :class="'product-badge status-' + slotProps.value.toLowerCase()">{{ slotProps.value }}</span>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
          </Dropdown>
        </div>

        <div class="field">
          <label class="mb-3">Category</label>
          <div class="formgrid grid">
            <div class="field-radiobutton col-6">
              <RadioButton id="category1" name="category" value="Accessories" v-model="product.category" />
              <label for="category1">Accessories</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="category2" name="category" value="Clothing" v-model="product.category" />
              <label for="category2">Clothing</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="category3" name="category" value="Electronics" v-model="product.category" />
              <label for="category3">Electronics</label>
            </div>
            <div class="field-radiobutton col-6">
              <RadioButton id="category4" name="category" value="Fitness" v-model="product.category" />
              <label for="category4">Fitness</label>
            </div>
          </div>
        </div>

        <div class="formgrid grid">
          <div class="field col">
            <label for="price">Price</label>
            <InputNumber id="price" v-model="product.price" mode="currency" currency="USD" locale="en-US" />
          </div>
          <div class="field col">
            <label for="quantity">Quantity</label>
            <InputNumber id="quantity" v-model="product.quantity" integeronly />
          </div>
        </div>
        <template #footer>
          <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
          <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveProduct" />
          <Button label="Add DoE" icon="pi pi-plus" class="p-button-outlined" @click="saveProduct" />
        </template>
      </Dialog>
</template>

<script>
export default {
  data() {
    return {
      radioValue: 'aaa',
      customEvents: [
        {
          name: 'olivia',
          status: 'inprogress',
          date: '15/10/2020 10:30',
          icon: 'pi pi-shopping-cart',
          color: '#9C27B0',
          image: 'game-controller.jpg',
          isExpand: true,
          isAddFiles: false,
        },
        {
          name: 'holand',
          status: 'completed',
          date: '16/10/2020 10:00',
          icon: 'pi pi-check',
          color: '#607D8B',
          isExpand: false,
          isAddFiles: false,
        }
      ],

      //
      products: null,
			productDialog: false,
			deleteProductDialog: false,
			deleteProductsDialog: false,
			product: {},
			selectedProducts: null,
			filters: {},
			submitted: false,
			statuses: [
				{label: 'INSTOCK', value: 'instock'},
				{label: 'LOWSTOCK', value: 'lowstock'},
				{label: 'OUTOFSTOCK', value: 'outofstock'}
			]
    }
  },
  methods: {
    click(slotProps) {
      console.log(slotProps)
      slotProps.item.isExpand = false;
    },

    myUploader(event, slotProps) {
      console.log(event);
      console.log(slotProps)
      this.$toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
      setTimeout(() => slotProps.item.isAddFiles = false, 1000);
      //event.files == files to upload
    },

    openNew() {
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
    },
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
      display: none;
    }

    .p-card {
      margin-top: 1rem;
    }
  }
}
</style>