const formatDate = (date: string): string => {
    return new Date(date).toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}

const capitalizeSentence = (input: string): string => {
    let words = input.split(' ')    
    words = words.map(word => word[0].toUpperCase() + word.substring(1))
    return words.join(' ')
}

export {
    formatDate,
    capitalizeSentence
}