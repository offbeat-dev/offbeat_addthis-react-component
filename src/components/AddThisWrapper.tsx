import { Share } from '@carbon/icons-react';
import { Link, Loading } from 'carbon-components-react';
import React, { useState, useEffect } from 'react';
import { useExternalScript } from '../hooks/useExternalScript';
import './add-this-react.scss';

type IPropAddThis = {
  url: string;
  title?: string;
  float?: boolean;
};

const AddThis = ({ url, title, float = false }: IPropAddThis) => {
  const externalScript = url;
  const state = useExternalScript(externalScript);

  const [open, setOpen] = useState(false);

  const renderComponent = () => {
    if (float) {
      return (
        <>
          <div className="ms-blog-detail-block__share-post-float-container">
            <Link onClick={() => setOpen(!open)} className="share-post-button">
              <Share size="24" />
            </Link>
            {
              <div
                className={`addthis_inline_share_toolbox ${
                  open ? 'open' : ''
                } float`}
              ></div>
            }
          </div>
        </>
      );
    } else {
      return <div className="addthis_inline_share_toolbox"></div>;
    }
  };

  return (
    <div className={`ms-blog-details__add-this-share ${float ? 'float' : ''}`}>
      {!!title && (
        <h3 className="ms-blog-details__add-this-share-title">{title}</h3>
      )}
      {state === 'ready' && renderComponent()}
      {state === 'loading' && <Loading />}
    </div>
  );
};

export default AddThis;
