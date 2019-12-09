import React from 'react';
import { Resource, ResourceProps } from 'ra-core';

import { hasAccess } from './helpers';

interface Props extends ResourceProps {
    permissions: any;
}

export const ResourceWithPermissions = ({ permissions, name, list, create, edit, show, ...props }: Props) => {
    const access = {
        enabled: hasAccess(permissions, `${name}.enabled`),
        list: hasAccess(permissions, `${name}.list`),
        create: hasAccess(permissions, `${name}.create`),
        edit: hasAccess(permissions, `${name}.edit`),
        show: hasAccess(permissions, `${name}.show`),
    };

    if (!access.enabled) {
        return null;
    }

    return (
        <Resource
            {...props}
            name={name}
            list={access.list ? list : null}
            create={access.create ? create : null}
            edit={access.edit ? edit : null}
            show={access.show ? show : null}
        />
    );
};
