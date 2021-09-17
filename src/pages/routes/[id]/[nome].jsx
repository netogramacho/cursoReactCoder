import { useRouter } from "next/router"
import Link from "next/link"

export default function Nome() {

    const router = useRouter();
    console.log(router);
    const codigo = router.query.id
    const nome = router.query.nome

    return(
        <div>
            <h1>Rotas {">"} {codigo} {">"} {nome}</h1>
            <Link passHref href="/routes">
                <button>Voltar</button>
            </Link>
        </div>
    )
}