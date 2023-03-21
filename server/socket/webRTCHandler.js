module.exports = async (io) => {
    const addWebRTCListeners = async ({ socket, namespace }) => {
        const onConnSignal = async ({ signalData }) => {
            const { signal, connSocketId } = signalData;

            const resSignalData = { signal, connSocketId: socket.id };
            namespace.to(connSocketId).emit('webRTCConnSignal', { signalData: resSignalData })
            
        }

        const onConnInit = async ({ connSocketId }) => {
            namespace.to(connSocketId).emit('webRTCConnInit', { connSocketId: socket.id });
        }


        socket.on('webRTCConnSignal', onConnSignal);
        socket.on('webRTCConnInit', onConnInit);
    }

    return {
        addWebRTCListeners
    }
}