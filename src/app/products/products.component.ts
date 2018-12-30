import { Component } from "@angular/core";
import { shouldCallLifecycleInitHook } from "@angular/core/src/view";

@Component({
    selector: 'cric-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent {
    productsPageTitle: string = 'All Products:';
    imageWidth: number = 75;
    imageHeight: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    products: any[] = [
        {
            "ProductId" : 2,
            "ProductName" : "Cricket Bat",
            "ProductCode" : "CRIC-bat",
            "Description" : "English Willow - Grade 2 Senior Cricket Bat.",
            "Price" : 250.00,
            "ItemCount" : 34,
            "StarRating" : 4.2,
            "ImageFile" : "../assets/images/Bat.jpg"
        },
        {
            "ProductId" : 4,
            "ProductName" : "Cricket Glove",
            "ProductCode" : "cric-GLOVE",
            "Description" : "Player Grade Senior Size - Right Hand.",
            "Price" : 50.00,
            "ItemCount" : 5,
            "StarRating" : 3.7,
            "ImageFile" : "../assets/images/Glove.jpg"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    listFilter: string = "bat";
}