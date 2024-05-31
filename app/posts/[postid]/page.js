import PostDetails from "@/app/components/postDetails"
import { Suspense } from "react"

export default async function PostDetailsPage({params}) {
    const postid = params.postid
    const loadingjsx = (<div><h1>Loading...</h1></div>)
    return (
        <div style={{padding: "20px"}}>
            <h1>Post Details:</h1>

          <Suspense fallback={loadingjsx}>  
          <PostDetails postid={postid}/>
          </Suspense>
        </div>
    )
}