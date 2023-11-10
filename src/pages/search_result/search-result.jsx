import lookfor from '../../icons/lookfor.png';
import './style.sass'

export default function SearchResult() {
    return (
        <div className='container'>
            <div className='search_result_header_wrapper'>
                <div className='search_result_header_content'>
                    <h2 className='search_result_header'>ИЩЕМ. СКОРО БУДУТ РЕЗУЛЬТАТЫ </h2>
                    <p className='search_result_header_text'>Поиск может занять некоторое время, просим сохранять терпение.</p>
                </div>
                <img src={lookfor} alt='look fot'></img>
            </div>

            <div>
                <h2>ОБЩАЯ СВОДКА</h2>
                <p>{`Найдено ${123} вариантов`}</p>


                {/*<table>*/}
                {/*    <tr>*/}
                {/*        <th className='first_column' scope="row">Период</th>*/}
                {/*        <td className='top_line'>10.09.2021</td>*/}
                {/*        <td className='top_line'>17.09.2021</td>*/}
                {/*        <td className='top_line'>15.09.2021</td>*/}
                {/*        <td className='top_line'>19.09.2021</td>*/}
                {/*        <td className='top_line'>20.09.2021</td>*/}
                {/*        <td className='top_line'>10.09.2021</td>*/}
                {/*        <td className='top_line'>10.09.2021</td>*/}
                {/*        <td className='top_line'>13.09.2021</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th scope="row">Всего</th>*/}
                {/*        <td className='second_line'>7</td>*/}
                {/*        <td className='second_line'>7</td>*/}
                {/*        <td className='second_line'>7</td>*/}
                {/*        <td className='second_line'>7</td>*/}
                {/*        <td className='second_line'>7</td>*/}
                {/*        <td className='second_line'>7</td>*/}
                {/*        <td className='second_line'>7</td>*/}
                {/*        <td className='second_line'>7,223</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <th className='last_column' scope="row">Риски</th>*/}
                {/*        <td >1</td>*/}
                {/*        <td>6</td>*/}
                {/*        <td>1</td>*/}
                {/*        <td>1</td>*/}
                {/*        <td>1</td>*/}
                {/*        <td>1</td>*/}
                {/*        <td>0</td>*/}
                {/*        <td>1</td>*/}
                {/*    </tr>*/}
                {/*</table>*/}

            </div>
        </div>
    )
}