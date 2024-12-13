import * as ontologyFindIconHelper from '@telicent-oss/ontology-find-icon-helper';
import { IconStyleType } from '@telicent-oss/ontologyservice';
import { useEffect, useState } from 'react';

export function useOntologyStyles() {
  const [styles, setStyles] = useState<IconStyleType[]|null>(null);
  const [findIcon, setFindIcon] = useState(); // default to stub?
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ontologyFindIconHelper.moduleStylesPromise.then((loadedStyles) => {
      setStyles(loadedStyles);
      setIsLoading(false);
      setFindIcon((classUri) => {
        if (typeof classUri !== 'string') {
          console.warn(
            'useOntologyStyles.findIcon::' +
            'Expected classUri to be string' +
            ` instead got ${classUri}`
          );
          return;
        }
        ontologyFindIconHelper.findByClassUri(classUri);
      });
    });
  }, []);

  return { isLoading, styles, findIcon };
}
