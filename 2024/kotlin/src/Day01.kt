import java.util.PriorityQueue
import kotlin.math.abs

fun getListAsNumbers(lines: List<String>): Pair<List<Int>, List<Int>> {
    val leftList = mutableListOf<Int>()
    val rightList = mutableListOf<Int>()

    lines.forEach {
        val (leftNum, rightNum) = it.trim().split("\\s+".toRegex())
        leftList.add(leftNum.toInt())
        rightList.add(rightNum.toInt())
    }
    return leftList to rightList
}

fun main() {
    fun part1(input: List<String>): Int {
        val (leftList, rightList) = getListAsNumbers(input)
        val leftHeap = PriorityQueue(leftList)
        val rightHeap = PriorityQueue(rightList)
        var totalSum = 0

        while (leftHeap.isNotEmpty() && rightHeap.isNotEmpty()) {
            totalSum += abs(leftHeap.poll() - rightHeap.poll())
        }

        return totalSum
    }

    fun part2(input: List<String>): Int {
        val (leftList, rightList) = getListAsNumbers(input)
        val scores = mutableMapOf<Int, Int>()
        var finalScore = 0

        rightList.forEach { r ->
            scores[r] = (scores[r] ?: 0) + 1 // Increment the count for each number
        }
        leftList.forEach { l ->
            finalScore += l * (scores[l] ?: 0)

        }

        return finalScore
    }

    val input = readInput("day01")

    check(part1(input) == 1579939)
    check(part2(input) == 20351745)
}
