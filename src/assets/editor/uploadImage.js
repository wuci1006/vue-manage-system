//ckeditor 富文本编辑器自定义上传图片adapter

// qiniuInfo,uploadFile为图片上传接口/
// import { qiniuInfo, uploadFile } from '@/api/common';

export default class UploadImageAdapter {
  constructor(loader) {
      this.loader = loader
      this.imgURL = "xxxxxx" //这个是图片域名
  }

  async upload() {
    //获取到用户上传的文件
    const img = await this.loader.file;

    const promise = new Promise(async (resolve, reject) => {
      const { data, status } = await qiniuInfo();
      if (status !== 200) reject(false)
      const formData = new FormData();
      //token为上传到七牛云所需要的
      formData.append('token', data.token);
      formData.append('file', img);
      const res = await uploadFile(formData).catch(() => {});
      if (res.status === 200) {
        //必须要要以 default: imgurl形式
        let response = {
          default: `${this.imgURL}${res.data.hash}` //图片全链接
        }
        resolve(response)
      } else {
        reject(false)
      }
    })
    return promise
  }


  abort() {
    //可以书写删除服务器图片的逻辑
  }
}
