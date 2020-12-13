<!-- Authors.vue -->
<template>
  <div class="container-fluid">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <router-link to="/home">Dashboard</router-link>
      </li>
      <li class="breadcrumb-item active">Autor</li>
    </ol>

    <div class="card mb-3">
      <div class="card-header d-flex">
        <span>
          <i class="fas fa-chart-area"></i>
          Autores menú
        </span>
        <button
          class="btn btn-primary btn-sm ml-auto"
          v-on:click="showNewAuthorModal"
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
            <tr v-for="(author, index) in authors" :key="index">
              <td>{{index+1}}</td>
              <td>{{author.name}}</td>
              <td>
                <img :src="`${$store.state.serverPath}/storage/${author.image}`" :alt="author.name" class="table-image" />
              </td>
              <td v-show="$store.state.profile.role === 'administrator'">
                <button class="btn btn-primary btn-sm" v-on:click="editAuthor(author)">
                  <span class="fa fa-edit"></span>
                </button>
                <button class="btn btn-danger btn-sm" v-on:click="deleteAuthor(author)">
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

    <b-modal ref="newAuthorModal" hide-footer title="Add New Author">
      <div class="d-block">
        <form v-on:submit.prevent="createAuthor">
          <div class="form-group">
            <label for="name">Escribe el nombre</label>
            <input
              type="text"
              v-model="authorData.name"
              class="form-control"
              id="name"
              placeholder="Enter author name"
            />
            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
          </div>
          <div class="form-group">
            <label for="image">Escoge una imagen</label>
            <div v-if="authorData.image.name">
              <img src="" ref="newAuthorImageDisplay" class="w-150px" />
            </div>
            <input
              type="file"
              v-on:change="attachImage"
              ref="newAuthorImage"
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
              v-on:click="hideNewAuthorModal"
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

    <b-modal ref="editAuthorModal" hide-footer title="Update Author">
      <div class="d-block">
        <form v-on:submit.prevent="updateAuthor">
          <div class="form-group">
            <label for="name">Escribe el nombre</label>
            <input
              type="text"
              v-model="editAuthorData.name"
              class="form-control"
              id="name"
              placeholder="Enter author name"
            />
            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
          </div>
          <div class="form-group">
            <label for="image">Escoge una imagen</label>
            <div>
              <img :src="`${$store.state.serverPath}/storage/${editAuthorData.image}`" ref="editAuthorImageDisplay" class="w-150px" />
            </div>
            <input
              type="file"
              v-on:change="editAttachImage"
              ref="editAuthorImage"
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
              v-on:click="hideEditAuthorModal"
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
import * as authorService from '../services/author_service';
export default {
  name: "author",
  data() {
    return {
      authors: [],
      authorData: {
        name: '',
        image: '',
      },
      moreExists: false,
      nextPage: 0,
      editAuthorData: {},
      errors: {}
    }
  },
  mounted() {
    this.loadAuthors();
  },
  methods: {
    loadAuthors: async function() {
      try {
        const response = await authorService.loadAuthors();
        this.authors = response.data.data;

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
      this.authorData.image = this.$refs.newAuthorImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newAuthorImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.authorData.image);
    },
    hideNewAuthorModal() {
      this.$refs.newAuthorModal.hide();
    },
    showNewAuthorModal() {
      this.$refs.newAuthorModal.show();
    },
    createAuthor: async function () {
      let formData = new FormData();
      formData.append("name", this.authorData.name);
      formData.append("image", this.authorData.image);

      try {
        const response = await authorService.createAuthor(formData);
        this.authors.unshift(response.data);
        this.hideNewAuthorModal();
        this.flashMessage.success({
          message: 'Autor guardado',
          time: 5000
        });
        this.authorData = {
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
    deleteAuthor: async function(author) {
      if (!window.confirm(`¿Estás seguro de que quieres borrar…? ${author.name}`)) {
        return;
      }

      try {
        await authorService.deleteAuthor(author.id);

        this.authors = this.authors.filter(obj => {
          return obj.id != author.id;
        });

        this.flashMessage.success({
          message: 'Autor borrado correctamente',
          time: 5000
        });
      } catch (error) {
        this.flashMessage.error({
          message: error.response.data.message,
          time: 5000
        });
      }
    },
    hideEditAuthorModal() {
      this.$refs.editAuthorModal.hide();
    },
    showEditAuthorModal() {
      this.$refs.editAuthorModal.show();
    },
    editAuthor(author) {
      this.editAuthorData = {...author};
      this.showEditAuthorModal();
    },
    editAttachImage() {
      this.editAuthorData.image = this.$refs.editAuthorImage.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.editAuthorImageDisplay.src = reader.result;
        }.bind(this),
        false
      );

      reader.readAsDataURL(this.editAuthorData.image);
    },
    updateAuthor: async function() {
      console.log('update called');
      try {
        const formData = new FormData();
        formData.append('name', this.editAuthorData.name);
        formData.append('image', this.editAuthorData.image);
        formData.append('_method', 'put');

        const response = await authorService.updateAuthor(this.editAuthorData.id, formData);
        this.authors.map(author => {
          if (author.id == response.data.id) {
            for (let key in response.data) {
              author[key] = response.data[key];
            }
          }
        });
        this.hideEditAuthorModal();
        this.flashMessage.success({
          message: 'Autor cambiado correctamente',
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
        const response = await authorService.loadMore(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.moreExists = true;
          this.nextPage = response.data.current_page +1;
        } else {
          this.moreExists = false;
        }

        response.data.data.forEach(data => {
          this.authors.push(data)
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
