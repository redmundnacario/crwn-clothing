import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

import './collections-overview.component.scss';

const CollectionsOverview = ( {collections} ) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...otherCollectionsProps}) => (
                <CollectionPreview key = {id} {...otherCollectionsProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);