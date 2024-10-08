import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import styles from './App.module.css';
import foto from './assets/foto-luiz.png';
import './global.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts: PostType[] = [
   {
      id: 1,
      author: {
         avatarUrl: 'https://github.com/faelperini.png',
         name: 'Rafael Perini',
         role: 'Web Developer',
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋' },
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
         { type: 'link', content: '👉 jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-08-03 15:45:00'),
   },

   {
      id: 2,
      author: {
         avatarUrl: foto,
         name: 'Luiz Perini',
         role: 'Fullstack Developer',
      },
      content: [
         { type: 'paragraph', content: 'Fala galeraa 👋' },
         { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
         { type: 'link', content: '👉 jane.design/doctorcare' },
      ],
      publishedAt: new Date('2023-07-29 15:45:00'),
   },
];



export function App() {

   return (
      <div>
         <Header />

         <div className={styles.wrapper}>
            <Sidebar />

            <main>
               {posts.map( post => {
                  return (
                     <Post
                        key={post.id} 
                        post={post}
                     />
                  )
               })}
            </main>
         </div>

      </div>
   )
}
