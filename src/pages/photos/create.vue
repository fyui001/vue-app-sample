<template>
  <div class="photo-create-form-wrapper">
    <div class="form-wrapper">
      <b-form class="form" @submit.prevent="onSubmit" @reset="onReset">
        <b-alert show dismissible variant="danger" v-if="response.failure">
          <span class="alert-content">
            投稿に失敗しました<br />
            入力内容を確認してください
          </span>
        </b-alert>
        <b-form-group id="input-input-group-" label="Title" lavel-for="input-title" description="Please enter a title">
          <b-form-input id="input-title" v-model="form.title" placeholder="Enter title" :disabled="submitting">
          </b-form-input>
        </b-form-group>
        <b-form-group label="Picture" description="Compatible files: .jpg, .gif, .png">
          <div class="picture-wrapper">
            <div class="picture-button-wrapper">
              <label class="picture-button">
                Select Picture
                <b-form-file
                  v-model="form.picture"
                  accept="image/jpeg,image/gif,image/png"
                  ref="fileInput"
                  name="picture"
                  @change="handleSelectPicture"
                  :disabled="submitting"
                  plain
                >
                </b-form-file>
              </label>
            </div>
            <img class="picture-preview" :src="imageData.picture" />
          </div>
        </b-form-group>
        <b-form-group label="Content" description="Enter content">
          <b-form-textarea
            placeholder="Enter something"
            v-model="form.content"
            rows="3"
            maxlength="300"
            :disabled="submitting"
          >
          </b-form-textarea>
        </b-form-group>
        <div class="btn-wrapper">
          <b-button class="btn" type="submit" variant="info">Submit</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PhotoVuexModule from '../../store/PhotoModule'

export default Vue.extend({
  name: 'PhotoCreate',
  data() {
    return {
      form: {
        title: '',
        content: '',
        picture: null,
      },
      imageData: {
        picture: '',
      },
      submitting: false,
      response: {
        failure: false,
        msg: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      this.submitting = true
      const submitData = new FormData()
      submitData.append('title', this.form.title)
      submitData.append('image', this.form.picture)
      submitData.append('content', this.form.content)
      try {
        const result = await PhotoVuexModule(this.$store).postPhotoAction(submitData)
        if (!result.status) {
          this.submitting = false
          this.response.failure = true
          this.response.msg = result.msg
        }
        await this.$router.push('/photos')
      } catch (e) {
        this.submitting = false
        this.response.failure = true
      }
    },
    onReset() {
      console.log('reset!')
    },
    handleSelectPicture(event) {
      const file = event.target.files[0]
      const reader = new FileReader()
      if (file !== null) {
        this.form.picture = file
        reader.onload = (event) => {
          this.imageData.picture = event.target.result
        }
        reader.readAsDataURL(file)
      }
    },
  },
})
</script>

<style lang="scss">
body {
  background-color: #f9f9f9;
}
.photo-create-form-wrapper {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  .form-wrapper {
    height: auto;
    width: 70%;
    margin: 30px auto;
    background-color: white;
    border-radius: 15px;
    border: 1px solid #f9f9f9;
    .form {
      width: 70%;
      margin: 10px auto;
      .btn-wrapper {
        text-align: center;
        .btn {
          padding: 5px 30px;
        }
      }
    }
  }
}
.picture-wrapper {
  .picture-button-wrapper {
    text-align: center;
    .picture-button {
      width: 300px;
      padding: 5px 40px;
      font-size: 25px;
      border-radius: 5px;
      color: #ffff;
      background-color: #17a2b8;
      cursor: pointer;
    }
  }
  .picture-preview {
    width: 100%;
    margin: 10px;
  }
}
input[type='file'] {
  display: none;
  opacity: 0;
  width: 1px;
}
</style>
