
import React from 'react';
// import Box,{IBoxOptions,Item} from 'devextreme-react/box';
import { TagBoxTypes } from './types';
import TagBox from 'devextreme-react/tag-box';
import ResponsiveBox, { Row, Col, Location, Item, IResponsiveBoxOptions } from 'devextreme-react/responsive-box';




const TagBoxWrapper = (props: IResponsiveBoxOptions): JSX.Element => {
    return (
        <>
            <ResponsiveBox>
                <Row>
                    <Col ratio={1}>
                        <TagBox items={['as']}/>
                    </Col>
                    <Col ratio={1}>
                    <TagBox items={['as']}/>
                    </Col>
                    <Col ratio={1}>
                    <TagBox items={['as']}/>
                    </Col>
                </Row>
            </ResponsiveBox>

        </>
    )
}

export default TagBoxWrapper;


