import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Apollo } from 'apollo-angular';
import { GET_POSTS, GET_POSTS_BY_USERNAME } from '../graphql.operations';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[] = [];
  error: any;

  searchForm = new FormGroup({
    username: new FormControl('gethackteam', Validators.required),
  });

  searchPosts() {
    this.apollo.query({
      query: GET_POSTS_BY_USERNAME,
      variables: {
        username: this.searchForm.value.username,
      }
    }).subscribe(({ data }: any) => {
      this.posts = data.posts;
    });

  }

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_POSTS
    }).valueChanges.subscribe(({ data, error }: any) => {
      this.posts = data.posts;
      this.error = error;
    }
    );
  }
}