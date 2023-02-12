<script>
export default {
    render() {
        const arr = [1, 2, 3]
        return (
            <div>
                {
                    arr.map(i => {
                        return <div>{i}</div>
                    })
                }
            </div>
        )
    }
}
</script>