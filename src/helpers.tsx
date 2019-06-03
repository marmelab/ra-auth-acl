import get from 'lodash.get';

export const hasAccess = (permissions, permission) => get(permissions, permission, false);

export const buildFullAccessFor = (resources: string[]) =>
    resources.reduce((acc, resource) => {
        acc[resource] = {
            enabled: true,
            list: true,
            create: true,
            edit: true,
            show: true,
        };

        return acc;
    }, {});
