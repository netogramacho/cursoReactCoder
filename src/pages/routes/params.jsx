import { useRouter } from "next/router"
import Link from "next/link"


export default function Params() {

    const router = useRouter();

    const idade = router.query.idade
    const nome = router.query.nome

    return(
        <div>
            <h1>Rotas Params : {nome} e {idade}</h1>
            <Link passHref href="/routes">
                <button>Voltar</button>
            </Link>
        </div>
    )
}