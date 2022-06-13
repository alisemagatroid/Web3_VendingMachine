import Head from 'next/head'
import Web3 from 'web3'
import 'bulma/css/bulma.css'
import styles from '../styles/VendingMachine.module.css'




const VendigMachine = () => {
    
    let web3

    const connectWalletHandler = () => {
        if(typeof window !== "undefined" && typeof window.ethereum !== "undefined") 
        {   //
            window.ethereum.request( {method: "eth_requestAccounts"})   //메타마스크 연결
            web3 = new Web3(window.ethereum)
        }
        else 
        {   //메타마스크 install 되지 않은 경우
            console.log("메타마스크를 설치하세요")
        }
    }
    return (
        <div className={styles.main}>
            <Head>
                <title>VendigMachine App</title>
                <meta name="description" content="A Blockchain Vending app" />
            </Head>
            <nav className="navbar mt-4 mb-4">
                <div className='container'>
                    <div className='navbar-brand'>
                        <h1>Vending Machine</h1>
                    </div>
                    <div className='navbar-end'>
                        <button onClick = {connectWalletHandler} className='button is-primary'>Connect Wallet</button>
                    </div>
                </div>
            </nav>
            <section>
                <div className='container'>
                    <p>placeholder text</p>
                </div>
            </section>
        </div>
    )
}

export default VendigMachine