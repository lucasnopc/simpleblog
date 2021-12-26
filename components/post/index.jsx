import Link from "next/link"
import Image from "next/image"

export default function Post({ post }) {
  return <div className="relative group">
    <Link href={`/posts/${post.slug}`}>
      <a>
        <Image width={350} height={150} className="scale-90 transition-transform ease-in-out group-hover:scale-100" src={post.frontmatter.cover_image} alt="Post" />
        <div className="bg-black transition-opacity	opacity-80 hover:opacity-0 absolute top-0 left-0 h-36 flex items-center justify-center" style={{width:350}}>
          <h2 className="text-2xl uppercase font-semibold opacity-95 text-center">{post.frontmatter.title}</h2>
        </div>
      </a>
    </Link>
  </div>
}