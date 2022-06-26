<template>
  <div class="p-4">
    <h1 class="text-xl font-medium text-gray-700 pb-2 mb-4 border-b-2 border-b-gray-700">
      {{ $t('demo.title') }}
    </h1>
    <div class="py-8 text-center" v-if="store.loading">
      loading...
    </div>
    <div v-else class="shadow-md overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <DataTable :value="store.data" stripedRows sortMode="multiple" responsiveLayout="scroll">
        <template #header>
          {{ $t('demo.cars') }}
        </template>
        <Column field="vin" header="Vin"></Column>
        <Column field="year" header="Year" :sortable="true"></Column>
        <Column field="brand" header="Brand" :sortable="true"></Column>
        <Column field="color" header="Color"></Column>
      </DataTable>
    </div>
</div>
</template>


<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import { onMounted } from 'vue';
import useModuleStore from "../store";
const store = useModuleStore();

onMounted(() => store.initialize())
</script>


