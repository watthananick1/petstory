import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post, PostProps } from '../post/post';
import { useEffect, useState } from 'react';

export interface PostsProps {
  className?: string;
}

export interface PostData {
  id: string;
  firstName: string;
  lastName: string;
  Comment: object;
  like: any[];
  description: string;
  tagpet: string[];
}


