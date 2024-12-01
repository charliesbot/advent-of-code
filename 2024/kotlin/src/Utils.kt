import java.math.BigInteger
import java.nio.file.Files
import java.nio.file.Paths
import java.security.MessageDigest
import kotlin.io.path.Path
import kotlin.io.path.readText

/**
 * Reads lines from the given input txt file.
 */
//fun readInput(name: String) = Path("src/$name.txt").readText().trim().lines()
fun readInput(name: String): List<String> {
    val filePath = Paths.get("../inputs", "$name.input.txt") // Move up one level to access 'inputs'
    if (!Files.exists(filePath)) {
        throw IllegalArgumentException("File not found: $filePath")
    }
    return filePath.readText().trim().lines()
}

/**
 * Converts string to md5 hash.
 */
fun String.md5() = BigInteger(1, MessageDigest.getInstance("MD5").digest(toByteArray()))
    .toString(16)
    .padStart(32, '0')

/**
 * The cleaner shorthand for printing output.
 */
fun Any?.println() = println(this)
