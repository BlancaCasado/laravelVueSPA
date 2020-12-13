<!-- Histories.vue -->
<template>
  <div class="container-fluid">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/home">Dashboard</router-link>
      </li>
      <li class="breadcrumb-item active">History</li>
    </ol>

    <div class="card mb-3">
      <div class="card-header d-flex">
        <span>
          <i class="fas fa-chart-area"></i>
          Historias menú
        </span>
        <button
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewHistoryModal"
        >
          <span class="fa fa-plus"></span> Crear nuevo
        </button>
      </div>
      <div class="card-body">
        <table class="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Nombre</td>
              <td>Imagen</td>
              <td v-show="$store.state.profile.role === 'administrator'">Acciones</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(history, index) in histories" :key="index">
              <td>{{index+1}}</td>
              <td>{{history.name}}</td>
              <td>
                <img :src="`${$store.state.serverPath}/storage/${history.image}`" :alt="history.name" class="table-image" />
              </td>
              <td v-show="$store.state.profile.role === 'administrator'">
                <button class="btn btn-primary btn-sm" v-on:click="editHistory(history)">
                  <span class="fa fa-edit"></span>
                </button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteHistory(history)">
                  <span class="fa fa-trash"></span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="text-center" v-show="moreExists">
          <button type="button" class="btn btn-primary btn-sm" v-on:click="loadMore">
            <span class="fa fa-arrow-down"></span> Cargar más
          </button>
        </div>
        
      </div>
    </div>

    <b-modal ref="newHistoryModal" hide-footer title="Add New History">
      <div class="d-block">
        <form v-on:submit.prevent="createHistory">
          <div class="form-group">
            <label for="name">Escribe el nombre</label>
            <input
              type="text"
              v-model="historyData.name"
              class="form-control"
              id="name"
              placeholder="Enter history name"
            />
            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
          </div>
          <div class="form-group">
            <label for="image">Escoge una imagen</label>
            <div v-if="historyData.image.name">
              <img src="" ref="newHistoryImageDisplay" class="w-150px" />
            </div>
            <input
              type="file"
              v-on:change="attachImage"
              ref="newHistoryImage"
              class="form-control"
              id="image"
            />
            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>

          </div>

          <hr />
          <div class="text-right">
            <button
              type="button"
              class="btn btn-default"
              v-on:click="hideNewHistoryModal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Save
            </button>
          </div>
        </form>
      </div>
    </b-modal>

    <b-modal ref="editHistoryModal" hide-footer title="Update History">
      <div class="d-block">
        <form v-on:submit.prevent="updateHistory">
          <div class="form-group">
            <label for="name">Escribe el nombre</label>
            <input
              type="text"
              v-model="editHistoryData.name"
              class="form-control"
              id="name"
              placeholder="Enter history name"
            />
            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
          </div>
          <div class="form-group">
            <label for="image">Escoge una imagen</label>
            <div>
              <img :src="`${$store.state.serverPath}/storage/${editHistoryData.image}`" ref="editHistoryImageDisplay" class="w-150px" />
            </div>
            <input
              type="file"
              v-on:change="editAttachImage"
              ref="editHistoryImage"
              class="form-control"
              id="image"
            />
            <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>

          </div>

          <hr />
          <div class="text-right">
            <button
              type="button"
              class="btn btn-default"
              v-on:click="hideEditHistoryModal"
            >
              Cancel
            </button>
            <button type="submit" class="btn btn-primary">
              <span class="fa fa-check"></span> Save
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import * as historyService from '../services/history_service';
export default {
  name: "history",
  data() {
    return {
      histories: [],
      historyData: {
        name: '',
        image: '',
      },
      moreExists: false,
      nextPage: 0,
      editHistoryData: {},
      errors: {}
    }
  },
  mounted() {
    this.loadHistories();
  },
  methods: {
    loadHistories: async function() {
      try {
        const response = await historyService.loadHistories();
        this.histories = response.data.data;

        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page +1;
        } else {
          this.moreExists = false;
        }
      } catch (error) {
        this.flashMessage.error({
          message: 'Ha ocurrido un error refresca!',
          time: 5000
        });
      }
    },
    attachImage() {
      this.historyData.image = this.$refs.newHistoryImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newHistoryImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.historyData.image);
    },
    hideNewHistoryModal() {
      this.$refs.newHistoryModal.hide();
    },
    showNewHistoryModal() {
      this.$refs.newHistoryModal.show();
    },
    createHistory: async function () {
      let formData = new FormData();
      formData.append("name", this.historyData.name);
      formData.append("image", this.historyData.image);

      try {
        const response = await historyService.createHistory(formData);
        this.histories.unshift(response.data);
        this.hideNewHistoryModal();
        this.flashMessage.success({
          message: 'Post de historia guardada',
          time: 5000
        });
        this.historyData = {
          name: '',
          image: ''
        };
      } catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          default:
            this.flashMessage.error({
              message: 'Ha ocurrido un error prueba de nuevo!',
              time: 5000
            });
            break;
        }
      }
    },
    deleteHistory: async function(history) {
      if (!window.confirm(`¿Estás seguro de que quieres borrar…? ${history.name}`)) {
        return;
      }

      try {
        await historyService.deleteHistory(history.id);

        this.histories = this.histories.filter(obj => {
          return obj.id != history.id;
        });

        this.flashMessage.success({
          message: 'Post de historia borrada correctamente',
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    hideEditHistoryModal() {
      this.$refs.editHistoryModal.hide();
    },
    showEditHistoryModal() {
      this.$refs.editHistoryModal.show();
    },
    editHistory(history) {
      this.editHistoryData = {...history};
      this.showEditHistoryModal();
    },
    editAttachImage() {
      this.editHistoryData.image = this.$refs.editHistoryImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.editHistoryImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.editHistoryData.image);
    },
    updateHistory: async function() {
      console.log('update called');
      try {
        const formData = new FormData();
        formData.append('name', this.editHistoryData.name);
        formData.append('image', this.editHistoryData.image);
        formData.append('_method', 'put');

        const response = await historyService.updateHistory(this.editHistoryData.id, formData);
        this.histories.map(history => {
          if (history.id == response.data.id) {
            for (let key in response.data) {
              history[key] = response.data[key];
            }
          }
        });
        this.hideEditHistoryModal();
        this.flashMessage.success({
          message: 'Post de historia cambiada correctamente',
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    loadMore: async function() {
      try{
        const response = await historyService.loadMore(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page +1;
        } else {
          this.moreExists = false;
        }

        response.data.data.forEach(data => {
          this.histories.push(data)
        })
      } catch (error) {
        this.flashMessage.error({
          message: 'Ha ocurrido un error cargando más categorías',
          time: 5000
        });
      }
    }
  }
}
</script>
