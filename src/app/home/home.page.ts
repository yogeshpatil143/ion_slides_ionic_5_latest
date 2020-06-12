import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mainPredictionArray: { header: string; predictionImageURL: string; subject: string; title: string; id: string; chatResponse: any[]; }[];
  loginProfilePic: any;
  constructor() {
    this.showSlides()
    
  }
  showSlides() {
    this.mainPredictionArray = [{ "header": "Keyur Lasan", "predictionImageURL": "https://firebasestorage.googleapis.com/v0/b/future-prediction-34f29.appspot.com/o/images%2FKeyur.jpg?alt=media&token=4a892fe1-984a-4537-b92c-a6e94ff8c711", "subject": " Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ", "title": " Founded in 1829", "id": "Keyur", "chatResponse": [] },
    { "header": "Milan Marvadi", "predictionImageURL": "https://firebasestorage.googleapis.com/v0/b/future-prediction-34f29.appspot.com/o/images%2FMilan.jpg?alt=media&token=79c3e61c-d5de-4dd1-b04f-bfbc1ad39ff2", "subject": " Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ", "title": " Founded in 1829", "id": "Milan", "chatResponse": [] },
    { "header": "Shailesh Kotho", "predictionImageURL": "https://firebasestorage.googleapis.com/v0/b/future-prediction-34f29.appspot.com/o/images%2FShailesh.jpg?alt=media&token=b7efc8e6-c205-449c-89e0-1a0c17487815", "subject": " Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ", "title": " Founded in 1829", "id": "Shailesh", "chatResponse": [] },
    { "header": "Yogesh Kumar", "predictionImageURL": "https://firebasestorage.googleapis.com/v0/b/future-prediction-34f29.appspot.com/o/images%2FYogesh.jpg?alt=media&token=59c11de3-a55f-4188-8b5c-3baa53a253e9", "subject": " Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836. ", "title": " Founded in 1829", "id": "Yogesh", "chatResponse": [] }
    ]
  }

}
