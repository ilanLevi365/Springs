import React from 'react';
import './Rings_List.css';
import Ring_Type_1 from './Rings_Typs/Ring_Type_1.jsx';
import Ring_Type_2 from './Rings_Typs/Ring_Type_2.jsx';


export default (props) => {

    const items_Array = props.items_Array;

    const [line_1, line_2, line_3, line_4] = [[], [], [], []];

    items_Array.map((line) => {
        if (line.id === 1 || line.id === 2) { line_1[line.id] = line }
        else if (line.id > 2 && line.id < 6) { line_2[line.id] = line }
        else if (line.id > 5 && line.id < 8) { line_3[line.id] = line }
        else if (line.id > 7 && line.id < 11) { line_4[line.id] = line }
    })

    return (
        <React.Fragment>
            <div className="Ring_List">
                <br />
                <br />
                <p id='word_New'>NEW</p>
                <br />
                <p id='words_New_Colection'>המציאי מחדש את המראה שלך עם המילה האחרונה בתכשיטי יהלומים, פריטים עונתיים במגוון סגנונות , מתעדכנים כל עונה</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Ring_Type_1 items_Arr={line_1} />
                <p id='words_New_Colection'>תחדשי את עצמך  במילה האחרונה  של תכשיטי היהלומים ע"י קולקציית  החדשה והמרהיבה בעולם <b> SPRINGS</b></p>
                <br />
                <br />
                <br />
                <br />
                <Ring_Type_2 items_Arr={line_2} />
                <br />
                <p id='word_New'>NEW</p>
                <br />
                <p id='words_New_Colection'>...תכשיטי יהלומים יחודיים, ברמה  אחת מעל כולם</p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Ring_Type_1 items_Arr={line_3} />
                <p id='words_New_Colection'>המציאי מחדש את המראה שלך עם המילה האחרונה בתכשיטי יהלומים, פריטים עונתיים במגוון סגנונות   <b> SPRINGS</b>  כל עונה  </p>
                <br />
                <br />
                <br />
                <br />
                <br />
                <Ring_Type_2 items_Arr={line_4} />
            </div>
        </React.Fragment >
    );
}


