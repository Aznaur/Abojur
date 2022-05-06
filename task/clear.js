export const clear = () => {
    return app.plugins.del(app.path.dist.base);
}
