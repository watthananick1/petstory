import styles from './posts.module.scss';
import classNames from 'classnames';
import { Post } from '../post/post';

export interface PostsProps {
    className?: string;
}
const 
/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-postss-and-templates
 */
export const Posts = ({ className }: PostsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
        {}
            <Post />
        </div>
    );
};
