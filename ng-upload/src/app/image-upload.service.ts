import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ImageUploadService {
  constructor(private http: HttpClient) {}

  imageUpload(imageForm: FormData) {
    console.log("image uploading");
    return this.http.post("https://test.jobhere.tech/api/v1/upload", imageForm);
  }
}
