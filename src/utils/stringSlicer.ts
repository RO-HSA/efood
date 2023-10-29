const slicer = (data: string, limit: number) => {
  if (data.length > limit) {
    return data.slice(0, limit - 3) + '...'
  }
  return data
}

export default slicer
