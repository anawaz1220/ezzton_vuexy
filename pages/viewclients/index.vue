<template>
  <VCard>
  <v-card-text>
    <div class="d-flex justify-space-between flex-wrap py-5">
      <h3>ALL Clients</h3>
      <div class="d-flex gap-3">
        <VBtn>ADD CLIENT</VBtn>
        <VBtn>IMPORT CLIENT</VBtn>
      </div>
    </div>
    <div class="d-flex justify-space-between flex-wrap">
    <span class="d-flex gap-3">
      <AppSelect
    :items="items"  
    style="inline-size: 7rem;"
    
    
  />
    </span >
    <!-- <div > -->
      <span>
        <AppTextField
  style="inline-size: 15rem;"
    placeholder="Placeholder Text"
  />
      </span>
  
<!-- </div> -->
  </div>
    <VDataTable :headers="headers" :items="data">
      <template #bottom>
      
    </template>
    <!-- Actions -->
    <template #item.actions="{ item }">
      <div class="d-flex gap-1">
        <IconBtn @click="editItem(item.raw)">
          <VIcon icon="tabler-edit" />
        </IconBtn>
        <IconBtn @click="openDeleteDialog">
          <VIcon icon="tabler-trash" />
        </IconBtn>
      </div>
    </template>
   
    </VDataTable>
    <VPagination
    v-model="currentPage"
    :length="5"
    rounded="circle"
  />
  </v-card-text>
  </VCard>  
   <!-- 👉 Delete Dialog  -->
   <VDialog
    v-model="deleteDialog"
    max-width="500px"
  >
    <VCard>
      <VCardTitle>
        Are you sure you want to delete this item?
      </VCardTitle>

      <VCardActions>
        <VSpacer />

        <VBtn
          color="error"
          variant="outlined"
          @click="closeDialog"
        >
          Cancel
        </VBtn>

        <VBtn
          color="success"
          variant="elevated"
          @click="deleteItemConfirm"
        >
          OK
        </VBtn>

        <VSpacer />
      </VCardActions>
    </VCard>
  </VDialog>
 
  </template>



<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
// import data from '@/views/demos/forms/tables/data-table/datatable'
// actions
const deleteDialog = ref(false)
const  openDeleteDialog =( ) => {
  deleteDialog.value = true;
}
const closeDialog = () => {
  deleteDialog.value = false;
}
// paginatioin
const currentPage = ref(1)

const headers = [
  {
    title: 'ID',
    sortable: false,
    key: 'id',
  },
  {
    title: 'NAME',
    key: 'fullName',
  },
  {
    title: 'ACCOUNT NO',
    key: 'accountNo',
  },
  {
    title: 'EMAIL',
    key: 'email',
  },
  
  {
    title: 'CONTACT',
    key: 'contact',
  },
  {
    title: 'Actions',
    key: 'actions',
  },
]

const data = [
    {
        id:'1',
        fullName:"Hamza Anjum",
        accountNo:'123457',
        email:'hamzanjum723@gmail.com',
        contact:'03334767316',


    }
]

// small select betwenn show and entries
const items = [
  'Foo',
  'Bar',
  'Fizz',
  'Buzz',
]
</script>




