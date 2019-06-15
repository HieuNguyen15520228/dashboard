import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import BlogPosts from "./views/BlogPosts";
import Overview from 'components/Overview';
import User from 'components/User';
import RentalWating from 'components/Rental/RentalWaiting'
import Rental from 'components/Rental'
import Blog from 'components/blog'
import Contact from 'components/Contact'
export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/overview" />
  },

  {
    path: "/overview",
    layout: DefaultLayout,
    component: Overview
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-post",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/blog",
    layout: DefaultLayout,
    component: Blog
  },
  {
    path: "/user",
    layout: DefaultLayout,
    component: User
  },
  {
    path: "/rental-pending",
    layout: DefaultLayout,
    component : RentalWating
  },
  {
    path: "/rental",
    layout: DefaultLayout,
    component : Rental
  },
  {
    path: '/contact',
    layout: DefaultLayout,
    component: Contact
  }
];
