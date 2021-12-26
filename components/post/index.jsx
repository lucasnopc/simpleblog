import Link from "next/link"
import Image from "next/image"

export default function Post({ post }) {
  return <div>

    <Link href={`/posts/${post.slug}`}>
      <a>
        <Image width={100} height={200} src={post.frontmatter.cover_image} alt="Post" />
        <h2 className="uppercase font-semibold text-sm">{post.frontmatter.title}</h2>
      </a>
    </Link>
  </div>
}