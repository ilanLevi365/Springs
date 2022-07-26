import React from 'react';
import './Earrings_List.css';
import Earring_Type_1 from './Earring_Typs/Earring_Type_1.jsx'
import Earring_Type_2 from './Earring_Typs/Earring_Type_2.jsx'


export default (props) => {

    const items_Array = props.items_Array;

    const [line_1, line_2, line_3, line_4] = [[], [], [], []];

    items_Array.map((line) => {
        if (line.id === 11 || line.id === 12) { line_1[line.id] = line }
        else if (line.id > 12 && line.id < 16) { line_2[line.id] = line }
        else if (line.id > 15 && line.id < 18) { line_3[line.id] = line }
        else if (line.id > 17 && line.id < 21) { line_4[line.id] = line }
    })

    return (
        <React.Fragment>
            <div className="Earrings_List">
                <br />
                <br />
                <br />
                <p id='word-New'>NEW</p>
                <br />
                <p id='words-New_Colection'>המציאי מחדש את המראה שלך עם המילה האחרונה בתכשיטי יהלומים, פריטים עונתיים במגוון סגנונות , מתעדכנים כל עונה  </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Earring_Type_1 items_Arr={line_1} />
                <p id='words-New_Colection'> קולקציית תכשיטים ויהלומים הטובים ביותר הנעשים בעבודת יד... מציגה  קלוקציה מעוצבת שנבחרה בקפידה  <b> SPRINGS</b> </p>
                <Earring_Type_2 items_Arr={line_2} />
                <br />
                <br />
                <p id='word-New'>NEW</p>
                <br />
                <p id='words-New_Colection'>תחדשי את עצמך  במילה האחרונה  של תכשיטי היהלומים ע"י קולקציית התכשיטים החדשה והמרהיבה בעולם, עכשיו בתצוגה</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Earring_Type_1 items_Arr={line_3} />
                <p id='words-New_Colection'>המציאי מחדש את המראה שלך עם המילה האחרונה בתכשיטי יהלומים, פריטים עונתיים במגוון סגנונות , מתעדכנים כל עונה   <b> SPRINGS</b></p>
                <Earring_Type_2 items_Arr={line_4} />
            </div>
        </React.Fragment >
    );
}


