import Image  from "next/image";
import embed_graph from "src/public/Card_France.png"
export default function EmbedGraph() {
  return (
    <div className="image-container">    
    <Image src={embed_graph} width={200} height={200} alt="graph" />
    </div>

  )
}
