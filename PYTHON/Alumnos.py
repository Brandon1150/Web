def get_grade(score):
    if 97 <= score <= 100:
        return "A+"
    elif 93 <= score <= 96:
        return "A"
    elif 90 <= score <= 92:
        return "A-"
    elif 87 <= score <= 89:
        return "B+"
    elif 83 <= score <= 86:
        return "B"
    else:
        return "Below B"

# Calculando la suma y el promedio de las calificaciones
def calculate_average(grades):
    """
    Calculates the average of the grades in the input list.

    Parameters:
    grades (list): A list containing the grades.

    Returns:
    float: The average of the grades.
    """
    return sum(grades) / len(grades)


# Calificaciones de los estudiantes
sophia_grades = [93, 87, 98, 95, 100]
nicolas_grades = [80, 83, 82, 88, 85]
zahirah_grades = [84, 96, 73, 85, 79]
jeong_grades = [90, 92, 98, 100, 97]



sophia_score = calculate_average(sophia_grades)
nicolas_score = calculate_average(nicolas_grades)
zahirah_score = calculate_average(zahirah_grades)
jeong_score = calculate_average(jeong_grades)

# print(f"Sophia's Score: {sophiaScore}")
# print(f"Nicolas's Score: {nicolasScore}")
# print(f"Zahirah's Score: {zahirahScore}")
# print(f"Jeong's Score: {jeongScore}")


# print(f"Sophia's Grade: {get_grade(sophiaScore)}")
# print(f"Nicolas's Grade: {get_grade(nicolasScore)}")
# print(f"Zahirah's Grade: {get_grade(zahirahScore)}")
# print(f"Jeong's Grade: {get_grade(jeongScore)}")

print(f"Sophia's Score: {sophia_score} - Grade: {get_grade(sophia_score)}")
print(f"Nicolas's Score: {nicolas_score} - Grade: {get_grade(nicolas_score)}")
print(f"Zahirah's Score: {zahirah_score} - Grade: {get_grade(zahirah_score)}")
print(f"Jeong's Score: {jeong_score} - Grade: {get_grade(jeong_score)}")


