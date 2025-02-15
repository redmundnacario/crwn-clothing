import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route exact path={`${match.path}/:collectionId` } component={CollectionPage}/>
    </div>
)
// <Route exact path={`${match.path}`} component={CollectionsOverview}/>
export default ShopPage;
