from colorama import Fore, Back, Style

test_cases = [
    # 1. Single Employee, Single Interval
    {"schedule": [[[1, 5]]], "expected": []},

    # 2. Single Employee, Multiple Non-Overlapping Intervals
    {"schedule": [[[1, 3], [6, 7]]], "expected": [[3, 6]]},

    # 3. Two Employees, Fully Overlapping Intervals
    {"schedule": [[[1, 5]], [[1, 5]]], "expected": []},

    # 4. Two Employees, Partially Overlapping Intervals
    {"schedule": [[[1, 3], [6, 7]], [[2, 4], [8, 9]]], "expected": [[4, 6], [7, 8]]},

    # 5. Two Employees, Non-Overlapping Intervals
    {"schedule": [[[1, 2], [5, 6]], [[3, 4], [7, 8]]], "expected": [[2, 3], [4, 5], [6, 7]]},

    # 6. Multiple Employees, Mixed Overlapping
    {"schedule": [[[1, 3], [9, 12]], [[2, 4], [6, 8]], [[5, 10]]], "expected": [[4, 5], [12, 12]]},

    # 7. Single Employee, Fully Occupied
    {"schedule": [[[1, 24]]], "expected": []},

    # 8. Empty Schedule
    {"schedule": [[]], "expected": []},

    # 9. All Employees with Disjoint Schedules
    {"schedule": [[[1, 2]], [[3, 4]], [[5, 6]]], "expected": [[2, 3], [4, 5]]},

    # 10. All Employees with Adjacent Intervals
    {"schedule": [[[1, 2]], [[2, 3]], [[3, 4]]], "expected": []},

    # 11. One Employee Has Free Time
    {"schedule": [[[1, 5], [10, 15]], [[1, 12]]], "expected": [[12, 15]]},

    # 12. Multiple Employees with Complex Intervals
    {"schedule": [[[1, 3], [6, 8]], [[2, 4], [7, 10]], [[5, 6], [10, 12]]], "expected": [[4, 5], [8, 10]]},

    # 13. Single Interval Per Employee, Fully Disjoint
    {"schedule": [[[1, 2]], [[3, 4]], [[5, 6]], [[7, 8]]], "expected": [[2, 3], [4, 5], [6, 7]]},

    # 14. Free Time at the Start and End of the Day
    {"schedule": [[[2, 6]], [[8, 10]], [[3, 7]]], "expected": [[6, 8]]},

    # 15. Completely Overlapping Intervals with Gaps
    {"schedule": [[[1, 5], [10, 15]], [[3, 6], [12, 20]], [[5, 10]]], "expected": []},
]

def employeeFreeTime(schedule):
    return [];

# run through our test_cases
def run_test_cases(testcases):
    passed = 0
    for case in testcases:
        try:
            answer = employeeFreeTime(case["schedule"])
            assert answer == case["expected"] 
            print(f"{Fore.GREEN}TEST CASE #{testcases.index(case) + 1} PASSED{Style.RESET_ALL}")
            passed += 1
        except AssertionError:
            print(f"{Fore.RED}---------ERROR: Test case #{testcases.index(case) + 1} failed---------{Style.RESET_ALL}")
            print(f"{Fore.YELLOW}Input:       {case['schedule']}{Style.RESET_ALL}")
            print(f"{Fore.YELLOW}Expected:    {case['expected']}{Style.RESET_ALL}")
            print(f"{Fore.RED}Actual:      {answer}{Style.RESET_ALL}")
            break # break testing if fail
    # check if we passed all our testcases
    if passed == len(testcases):
        print(f"{Fore.GREEN}TESTING PASSED.{Style.RESET_ALL}")
        print(f"{Fore.GREEN}Passed {passed}/{len(testcases)} test cases.{Style.RESET_ALL}")
    else:
        print(f"{Fore.RED}\nTESTING FAILED AT TEST CASE {passed}.{Style.RESET_ALL}")

run_test_cases(test_cases)