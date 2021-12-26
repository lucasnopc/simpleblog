import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from '../../components/layout'
import Image from 'next/image'

export default function PostPage(props) {
  // console.log(props)
  return <Layout>
    <h1>{props.frontmatter.title}</h1>
    <Image width={150} height={150} alt="props.slug" src={props.frontmatter.cover_image} />
    <p>{props.frontmatter.description}</p>
    <div dangerouslySetInnerHTML={{__html: marked(props.content)}}></div>
  </Layout>
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params: { slug } }) {
 const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'))
 
 const { data: frontmatter, content } = matter(markdownWithMeta)
 return {
    props: {
      content,
      frontmatter,
      slug
    }
  }
}