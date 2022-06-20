import { useParams } from 'react-router-dom';
import { getChain } from '../Components/data';
import './Chain.css';

export default function Chain() {
    let params = useParams();
    let chain = getChain(parseInt(params.chainId, 10));
    return (
        <main>
          <h2>{chain.name}</h2>
          <p>
            Total Validators: {chain.amount}
          </p>
          <p>APR: {chain.apr}</p>
        </main>
      );
  }