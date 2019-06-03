import React from 'react';
import { Resource, WithPermissions, ResourceProps } from 'ra-core';

import { hasAccess } from './helpers';

interface Props extends ResourceProps {
    permissions: any;
}

export const ResourceWithPermissions = ({
    permissions,
    name,
    list,
    create,
    edit,
    show,
    ...props
}: Props) => {
    const prefix = name.toLowerCase();

    const access = {
        enabled: hasAccess(permissions, `${prefix}.enabled`),
        list: hasAccess(permissions, `${prefix}.list`),
        create: hasAccess(permissions, `${prefix}.create`),
        edit: hasAccess(permissions, `${prefix}.edit`),
        show: hasAccess(permissions, `${prefix}.show`),
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
