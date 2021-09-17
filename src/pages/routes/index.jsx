import Link from "next/link"
import router, { useRouter } from "next/router"

export default function routes() {

    function navSimples(url){
        router.push(url)
    }

    function navParams(url){
        router.push({
            pathname:"/routes/params",
            query: {
                idade: 24,
                nome: "Neto"
            }
        })
    }

    return(
        <div>
            <h1>Rotas Index</h1> 
            <ul>
                <Link passHref href="/routes/params?nome=Neto&idade=24">
                    <li>Params</li>
                </Link>
                <Link passHref href="/routes/154/buscar">
                    <li>Buscar</li>
                </Link>
                <Link passHref href="/routes/171/Daniboy">
                    <li>Daniel</li>
                </Link>
            </ul>
            
            <div style={{display:"flex", flexDirection:"column", alignItems:"flex-start"}}>
                <button onClick={() => router.push("/routes/params?nome=Neto&idade=24")}>Params</button>
                <button onClick={() => router.push("/routes/154/buscar")}>Buscar</button>
                <button onClick={() => navSimples("/routes/171/Daniboy")}>Daniel</button>
            </div>
        </div>
    )
}