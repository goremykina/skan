import lookfor from '../../icons/lookfor.png';
import './style.sass'
import PropTypes from "prop-types";
import moment from "moment";
import { useEffect, useState } from "react";
import arrow from "../../icons/arrow.png";

SearchResult.propTypes = {
    histogram: PropTypes.array,
    maxVisible: PropTypes.number
}

const formatDate = (date) => {
    return moment(date).utc().format('DD.MM.YYYY')
}

export default function SearchResult({ histogram, maxVisible }) {
    const [columns, setColumns] = useState([]);
    const [totals, setTotals] = useState({});
    const [risks, setRisks] = useState({});
    const [pageNumber, setPageNumber] = useState(0);
    const [visibleColumn, setVisibleColumn] = useState([])

    const lastPage = Math.round(visibleColumn.length / maxVisible)
    console.log(lastPage, pageNumber)


    useEffect(() => {
        const allColumns = histogram.reduce((uniqueDates, row) => {
            row.data.forEach(entry => {
                const formattedDate = formatDate(entry.date);
                uniqueDates.add(formattedDate);
            });


            return uniqueDates;
        }, new Set());
        const orderedColumns = Array.from(allColumns).sort();

        const totalDocuments = histogram.find(company => company.histogramType === 'totalDocuments')
        const dateToTotal = totalDocuments.data.reduce((map, entry) => {
            const formattedDate = formatDate(entry.date);
            map[formattedDate] = entry.value;
            return map;
        }, {})

        const riskFactors = histogram.find(company => company.histogramType === 'riskFactors')
        const dateToRisks = riskFactors.data.reduce((map, entry) => {
            const formattedDate = formatDate(entry.date);
            map[formattedDate] = entry.value;
            return map;
        }, {})

        setColumns(orderedColumns);
        setTotals(dateToTotal);
        setRisks(dateToRisks);
        setPageNumber(-1);
        console.log(columns);
        console.log(dateToTotal)
        console.log(dateToRisks)
    }, [histogram]);

    useEffect(() => {
        const newVisibleColumns = [];
        const startIndex = pageNumber * maxVisible;
        const endIndex = Math.min(startIndex + maxVisible, columns.length);
        for (let index = startIndex; index < endIndex; ++index) {
            newVisibleColumns.push(columns[index]);
        }

        setVisibleColumn(newVisibleColumns);
    }, [pageNumber]);



    const handlePrevData = () => {
        setPageNumber(pageNumber - 1);
    }

    const handleNextData = () => {
        setPageNumber(pageNumber + 1);
    }

    return (
        <div>
            <div className='search_result_header_wrapper'>
                <div className='search_result_header_content'>
                    <h2 className='search_result_header'>ИЩЕМ. СКОРО БУДУТ РЕЗУЛЬТАТЫ </h2>
                    <p className='search_result_header_text'>Поиск может занять некоторое время, просим сохранять
                        терпение.</p>
                </div>
                <img src={lookfor} alt='look fot'></img>
            </div>

            <div>
                <h2>ОБЩАЯ СВОДКА</h2>
                <p>{`Найдено ${123} вариантов`}</p>

                <div className='search_result_wrapper'>
                    <button className='button_arrow' onClick={handlePrevData} disabled={pageNumber === 0}>
                        <img className='arrow' src={arrow} alt='arrow'/></button>
                    <table>
                        <tbody>
                        <tr>
                            <th className='first_column' scope="row">Период</th>
                            {visibleColumn.map((column, number) =>
                                (<td key={number} className='top_line'>{column}</td>)
                            )}
                        </tr>
                        <tr>
                            <th scope="row">Всего</th>
                            {visibleColumn.map((column, number) =>
                                (<td key={number} className='top_line'>{totals[column] || '0'}</td>)
                            )}
                        </tr>
                        <tr>
                            <th className='last_column' scope="row">Риски</th>
                            {visibleColumn.map((column, number) =>
                                (<td key={number} className='top_line'>{risks[column] || '0'}</td>)
                            )}
                        </tr>
                        </tbody>
                    </table>
                    <button className='button_arrow' onClick={handleNextData} disabled={lastPage === pageNumber}>
                        <img className='arrow right' src={arrow} alt='arrow'/>
                    </button>
                </div>
            </div>
        </div>
    )
}