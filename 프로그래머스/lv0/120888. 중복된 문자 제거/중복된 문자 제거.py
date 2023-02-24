def solution(my_string):
    unq_words = []
    for a in my_string:
        if a not in unq_words:
            unq_words.append(a)
    return ''.join(unq_words)
