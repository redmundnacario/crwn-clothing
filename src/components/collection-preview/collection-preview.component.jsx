import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.component.scss';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1>{title}</h1>
        <div className='preview'>
            {   
                items.filter((item, idx) => idx < 4)
                .map(({id, ...otherCollectionPreviewProps}) => (
                        <CollectionItem key={id} {...otherCollectionPreviewProps}/>
                    ))
            }
        </div>
    </div>
)

export default CollectionPreview;