import { Component, OnInit, Input} from '@angular/core';
import { BlogService } from '../service/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  @Input() blogs;

  stars: number[] = [1, 2, 3, 4, 5];
  evalue: number;

  constructor(private blogsService: BlogService) {}

  ngOnInit(): void {}

  //5 star rating
  countRate(rating, id) {
    this.evalue = rating;
    this.blogsService.blogs.forEach(element => {
      if(element.id == id) {
        if(element.rating == rating) {
          element.rating = 0;
          this.evalue = 0;
        } else{
          element.rating = rating;
        }
      }
    });
    //console.log('aaaa', rating);
    //console.log('hhhh1', this.blogsService.blogs);
    console.log(' new rating');
    alert('rating added');
  }

  //delete post
  deletePosts(id){
    this.blogsService.blogs.forEach(element => {
      if(element.id == id) {
        const no = this.blogsService.blogs.indexOf(element);
        if(no != -1) {
          this.blogsService.blogs.splice(no, 1);
        }
      }
    });
    //console.log('dddddd1234', this.blogsService.blogs+id);
    console.log('delete 1 post',this.blogsService.blogs);
    alert('Deleted Successfully');
  }
}
