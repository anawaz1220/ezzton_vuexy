<template>
    <VDataTable
      :headers="headers"
      :items="data"
      :items-per-page="5">
    
    
    </VDataTable>
    
  </template>



<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
// import data from '@/views/demos/forms/tables/data-table/datatable'

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
    key: 'account no',
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
</script>




